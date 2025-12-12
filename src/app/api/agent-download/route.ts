import { NextRequest, NextResponse } from 'next/server';
import JSZip from 'jszip';
import fs from 'fs/promises';
import path from 'path';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');
  const agent = searchParams.get('agent');

  if (!category || !agent) {
    return NextResponse.json(
      { error: 'Missing category or agent parameter' },
      { status: 400 }
    );
  }

  try {
    const agentPath = path.join(process.cwd(), 'content/docs', category, agent);

    // Check if agent directory exists
    try {
      await fs.access(agentPath);
    } catch {
      return NextResponse.json(
        { error: 'Agent not found' },
        { status: 404 }
      );
    }

    const zip = new JSZip();
    const agentFolder = zip.folder(agent);

    if (!agentFolder) {
      return NextResponse.json(
        { error: 'Failed to create ZIP folder' },
        { status: 500 }
      );
    }

    // Read and add each MDX file as .md
    const files = ['skill', 'reference', 'workflows'];

    for (const file of files) {
      const filePath = path.join(agentPath, `${file}.mdx`);
      try {
        const content = await fs.readFile(filePath, 'utf-8');
        agentFolder.file(`${file.toUpperCase()}.md`, content);
      } catch {
        // File doesn't exist, skip it
        console.log(`File ${file}.mdx not found for agent ${agent}`);
      }
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
  } catch (error) {
    console.error('Error generating ZIP:', error);
    return NextResponse.json(
      { error: 'Failed to generate ZIP' },
      { status: 500 }
    );
  }
}
