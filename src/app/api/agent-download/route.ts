import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import { AgentDownloadParamsSchema } from '@/types';
import { agentExists, getFullAgentContent, type Category } from '@/lib/mcp/agents';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const validation = AgentDownloadParamsSchema.safeParse({
    category: searchParams.get('category'),
    agent: searchParams.get('agent'),
  });

  if (!validation.success) {
    return NextResponse.json(
      { error: 'Invalid parameters', details: validation.error.flatten() },
      { status: 400 }
    );
  }

  const { category, agent } = validation.data;

  try {
    // Check if agent exists using the centralized repository function
    const exists = await agentExists(category as Category, agent);
    if (!exists) {
      return NextResponse.json({ error: 'Agent not found' }, { status: 404 });
    }

    // Get all agent content using the centralized service function
    const content = await getFullAgentContent(category as Category, agent);

    const zip = new JSZip();
    const agentFolder = zip.folder(agent);

    if (!agentFolder) {
      return NextResponse.json(
        { error: 'Failed to create ZIP folder' },
        { status: 500 }
      );
    }

    // Add each document type to the ZIP if content exists
    if (content.skill) {
      agentFolder.file('SKILL.md', content.skill);
    }
    if (content.reference) {
      agentFolder.file('REFERENCE.md', content.reference);
    }
    if (content.workflows) {
      agentFolder.file('WORKFLOWS.md', content.workflows);
    }

    // Generate ZIP as blob
    const zipBlob = await zip.generateAsync({ type: 'blob' });

    // Return ZIP file
    return new Response(zipBlob, {
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': `attachment; filename="${agent}.zip"`,
      },
    });
  } catch {
    return NextResponse.json(
      { error: 'Failed to generate ZIP' },
      { status: 500 }
    );
  }
}
