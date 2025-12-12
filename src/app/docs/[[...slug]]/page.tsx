import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '../../../../mdx-components';
import type { Metadata } from 'next';
import { CopyMarkdownButton, DownloadAgentButton } from '@/components/docs';

interface PageProps {
  params: Promise<{ slug?: string[] }>;
}

// Agent page types
const AGENT_PAGE_TYPES = ['skill', 'reference', 'workflows'] as const;

// Check if slug represents an agent page (e.g., experts/react-expert/skill)
function isAgentPage(slug?: string[]): boolean {
  if (!slug || slug.length < 3) return false;
  const pageType = slug[slug.length - 1];
  return AGENT_PAGE_TYPES.includes(pageType as typeof AGENT_PAGE_TYPES[number]);
}

// Get the agent name from slug (e.g., ['experts', 'react-expert', 'skill'] -> 'react-expert')
function getAgentName(slug: string[]): string {
  return slug[slug.length - 2];
}

// Get the page type from slug (e.g., ['experts', 'react-expert', 'skill'] -> 'skill')
function getPageType(slug: string[]): string {
  return slug[slug.length - 1];
}

// Get the category from slug (e.g., ['experts', 'react-expert', 'skill'] -> 'experts')
function getCategory(slug: string[]): string {
  return slug[0];
}

export default async function Page(props: PageProps) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const showCopyButton = isAgentPage(params.slug);

  // Get raw markdown content for agent pages
  let rawMarkdown: string | null = null;
  if (showCopyButton && params.slug) {
    try {
      const fs = await import('fs/promises');
      const path = await import('path');

      // Build path: content/docs/category/agent-name/pageType.mdx
      const filePath = path.join(process.cwd(), 'content/docs', ...params.slug) + '.mdx';
      rawMarkdown = await fs.readFile(filePath, 'utf-8');
    } catch {
      // Silently fail - raw markdown is optional for copy button
    }
  }

  const isSkillPage = showCopyButton && params.slug && getPageType(params.slug) === 'skill';

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} tableOfContent={{ style: 'clerk' }}>
      <div className="flex items-center justify-between gap-4 mb-2">
        <DocsTitle>{page.data.title}</DocsTitle>
        {showCopyButton && rawMarkdown && params.slug && (
          <div className="flex items-center gap-2">
            <CopyMarkdownButton
              content={rawMarkdown}
              filename={`${getAgentName(params.slug)}-${getPageType(params.slug)}`}
            />
            {isSkillPage && (
              <DownloadAgentButton
                category={getCategory(params.slug)}
                agentSlug={getAgentName(params.slug)}
              />
            )}
          </div>
        )}
      </div>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
