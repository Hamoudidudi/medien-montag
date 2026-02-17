import type { Issue } from "@/lib/models/issue";
import {
  getAllIssues as getAllIssuesDummy,
  getIssueBySlug as getIssueBySlugDummy,
  getLatestIssue as getLatestIssueDummy,
  getAllSlugs as getAllSlugsDummy,
} from "@/lib/cms/cms.client";

/**
 * CMS Gateway:
 * Heute: Dummy (cms.client.ts)
 * Später: Sanity (oder anderes)
 * -> Pages importieren nur noch von "@/lib/cms"
 */

export function getAllIssues(): Issue[] {
  return getAllIssuesDummy();
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return getIssueBySlugDummy(slug);
}

export function getLatestIssue(): Issue | undefined {
  return getLatestIssueDummy();
}

export function getAllSlugs(): string[] {
  return getAllSlugsDummy();
}
