import { HandlerContext } from "$fresh/server.ts";

import {cv} from "../../utils/db.ts"


export const handler = (_req: Request, _ctx: HandlerContext): Response => {

  return Response.json(cv)

  //const body = JSON.stringify(cv);
 // return new Response(body);
};


