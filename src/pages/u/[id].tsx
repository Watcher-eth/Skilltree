import type { GetServerSideProps } from "next";
import { ConvexHttpClient } from "convex/browser";
import { api } from "../../../convex/_generated/api";
import type { Id } from "../../../convex/_generated/dataModel";
import { ProfileLayout } from "@/components/profile/layout";
import { TreesContent } from "@/components/profile/trees";
import { AddressBookContent } from "@/components/profile/following";

type TabKey = "profile" | "following";

type Props =
  | {
      ok: true;
      tab: TabKey;
      user: any;
      trees: any[];
      following: any[];
    }
  | { ok: false };

export default function UserProfilePage(props: Props) {
  if (!props.ok) return <div className="p-8">Not found</div>;

  return (
    <ProfileLayout user={props.user} tab={props.tab}>
      {props.tab === "profile" ? (
        <TreesContent   user={props.user} trees={props.trees} />
      ) : (
        <AddressBookContent   />
      )}
    </ProfileLayout>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.params?.id;
  if (typeof id !== "string") return { props: { ok: false } };

  const tabQ = ctx.query?.tab;
  const tab: TabKey = tabQ === "following" ? "following" : "profile";

  const client = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
  const userId = id as Id<"users">;

  const user = await client.query(api.users.getByIdPublic, { userId });
  if (!user) return { props: { ok: false } };

  const trees =
    tab === "profile"
      ? await client.query(api.skillTrees.listPublicByOwner, {
          ownerId: userId,
          limit: 50,
        })
      : [];

  // If you already have an endpoint, plug it in here.
  // Keeping your current contract: return [] for now.
  const following =
    tab === "following"
      ? [] // await client.query(api.users.listFollowingPublic, { userId, limit: 50 })
      : [];

  return {
    props: {
      ok: true,
      tab,
      user,
      trees,
      following,
    },
  };
};