import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "f4ovsyl7",
  dataset: "production",
  apiVerstion: "2021-08-31",
  token:
    "skOtrGqRmu1ZqRhK429tD7RnuFk9r9Qdl2DKUeZKZWTVdRCKxsAu0KQvPLctxN25NQ3rqhdPkZ4Z8O2QOH1KSVsU2Vk1Avw6P0uqCXQBuefxMUkFpPVF0ZLc9ClrrJEthZ4y6ihY7WZ3N31GlMHxUcieNEQRfol5Mx1eKvi3SXRhN5hB6cGp",
  useCdn: false,
});
