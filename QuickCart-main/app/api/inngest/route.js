import { serve } from "Inngest/next";
import { inngest,  synUserCreation, syncUserDeletion,syncUserUpdation } from "@/config/inngest"

// Create an API that serves zero functions
export const { GET, POST, PUT } =serve({
    client: inngest,
    functions:[
     synUserCreation, 
      syncUserUpdation,
      syncUserDeletion,
  ], 
}];