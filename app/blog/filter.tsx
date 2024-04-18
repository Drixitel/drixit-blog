"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandInput,
  CommandGroup,
  CommandEmpty,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import type { Post } from "@/content/posts";
import { CheckIcon, PlusCircle, Search } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useTransition,
} from "react";

type Props = {
  posts: Post[];
} & JSX.IntrinsicElements["div"];

export function Filters(props: Props) {
  const { posts, className, ...rest } = props;
  const urlSearchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const { setFilteredPosts } = useFilteredPosts();
  const [_isPending, startTransition] = useTransition();
  const [search, setSearch] = useState("");
  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => post.tags);

    return Array.from(new Set(allTags));
  }, [posts]);

  const enabledTagFilters: string[] = useMemo(
    () => parseTagsFromSearchParams(urlSearchParams.get("tags")),
    [urlSearchParams]
  );

  const tagsSortedBySelection = useMemo(() => {
    return tags.sort((a, b) => {
      if (enabledTagFilters.includes(a) && !enabledTagFilters.includes(b)) {
        return -1;
      }

      if (!enabledTagFilters.includes(a) && enabledTagFilters.includes(b)) {
        return 1;
      }

      return 0;
    });
  }, [tags, enabledTagFilters]);

  const newSearchParams = useCallback(
    (tag: string) => {
      const nextParams = new URLSearchParams(urlSearchParams.toString());

      if (enabledTagFilters.includes(tag)) {
        const nextTags = enabledTagFilters.filter((t) => t !== tag);
        nextParams.set("tags", nextTags.join(","));
        return nextParams.toString();
      }

      const nextTags = [...enabledTagFilters, tag];
      nextParams.set("tags", nextTags.join(","));
      return nextParams.toString();
    },
    [urlSearchParams, enabledTagFilters]
  );

  useEffect(() => {
    startTransition(() => {
      let filteredPosts = posts;

      if (search.length > 1) {
        filteredPosts = filteredPosts.filter((post) =>
          post.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      for (const tag of enabledTagFilters) {
        filteredPosts = filteredPosts.filter((post) => post.tags.includes(tag));
      }

      setFilteredPosts(filteredPosts);
    });
  }, [search, enabledTagFilters, posts, setFilteredPosts]);

  return (
    <div className={cn(className, "mb-8 flex items-center")} {...rest}>
      <div className="border rounded-md flex items-center py-3 px-2 gap-2 w-80">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search posts..."
          className="border-none py-0 px-0 h-full bg-secondary text-secondary-foreground"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Separator orientation="vertical" className="mx-4 h-6" />

      <div className="flex flex-wrap justify-between gap-2 items-center">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              className="text-muted-foreground border-dashed hover:bg-muted hover:text-muted-foreground bg-secondary"
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Filter by tag
              {enabledTagFilters.length > 0 && (
                <>
                  <Separator orientation="vertical" className="mx-2 h-4" />
                  <Badge variant="default" className="ml-2">
                    {enabledTagFilters.length} selected
                  </Badge>
                </>
              )}
            </Button>
          </PopoverTrigger>

          <PopoverContent align="start">
            <Command className="rounded-none">
              <CommandInput placeholder="Search tags..." />
              <CommandList>
                <CommandEmpty>No tags found.</CommandEmpty>

                <ScrollArea className="h-[250px]">
                  <CommandGroup className="pr-3">
                    {tagsSortedBySelection.map((tag) => (
                      <CommandItem
                        key={tag}
                        className="cursor-pointer aria-selected:bg-muted aria-selected:text-foreground"
                        onSelect={() =>
                          router.push(`${pathname}?${newSearchParams(tag)}`)
                        }
                      >
                        <div
                          className={cn(
                            "rounded border border-primary/20 mr-2 p-1",
                            enabledTagFilters.includes(tag)
                              ? "bg-primary/100"
                              : "bg-primary/0"
                          )}
                        >
                          <CheckIcon
                            className={cn(
                              "h-4 w-4",
                              enabledTagFilters.includes(tag)
                                ? "text-primary-foreground"
                                : "text-transparent"
                            )}
                          />
                        </div>
                        {tag}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </ScrollArea>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

type FilteredPostsContext = {
  filteredPosts: Post[];
  setFilteredPosts: (posts: Post[]) => void;
};

function parseTagsFromSearchParams(paramValue: string | null) {
  return paramValue?.split(",").filter(Boolean) || [];
}

const FilteredPostsContext = createContext<FilteredPostsContext>({
  filteredPosts: [],
  setFilteredPosts: () => {},
});

export function FilteredPostsProvider(props: {
  children: ReactNode;
  posts: Post[];
}) {
  const [filteredPosts, setFilteredPosts] = useState(props.posts);

  const value = useMemo(
    () => ({
      filteredPosts,
      setFilteredPosts,
    }),
    [filteredPosts, setFilteredPosts]
  );
  return (
    <FilteredPostsContext.Provider value={value}>
      {props.children}
    </FilteredPostsContext.Provider>
  );
}

export function useFilteredPosts() {
  return useContext(FilteredPostsContext);
}
