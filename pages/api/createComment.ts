import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN,
};

const client = sanityClient(config);

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // de-structuring the form's fields
  const { _id, name, email, comment } = JSON.parse(req.body);
  // try {
  //   in sanity studio CMS for Comments with creating a schema for it
  //   await client.create({
  //     _type: "comment",
  //     post: {
  //       _type: "reference",
  //       _ref: _id,
  //     },
  //     name,
  //     email,
  //     comment,
  //   });
  // } catch (err) {
  //   return res.status(500).json({ message: "could not submit comment", err });
  }
  // return res.status(200).json({ message: "comment submitted" });
// }
const mutations = {
  mutations: [
    {
       _type: "comment",
      post: {
        _type: "reference",
        _ref: _id,
      },
      name,
      email,
      comment,
    
    },
  ],
};

const apiURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
  const result = await fetch(apiURL, {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    method: "POST",
    body: JSON.stringify(mutations),
  });

  const dataComment = result.json();

  res.status(200).json({ message: "DONE" });
}
