import { Innget } from "Inngest";

// Create a client to send and receive events
export const inngest = new inngest ({ id: "quickcart-next" });

// Inngest function to save user data to a database 
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    { event: 'clerk/user.created'},
    async({event}) => {
       const { id, first_name , last_name, email_address, image_url } = event.data
       const userdata = {
        _id:id,
        email: email_address[0].email_address,
        name: first_name +    + last_name
        imageUrl:image_url

       }
       await connectDB()
       await UserActivation.create(userData)

     }
  }

  // Inngest Function to update user data in database
  export const syncUserUpdation = inngest.createFunction(
    {
      id: 'update_user_from_clerk'
    },
    {event: 'clerk/user.updated' },
    async({event}) => {
       const { id, first_name , last_name, email_address, image_url } = event.data
       const userdata = {
        _id:id,
        email: email_address[0].email_address,
        name: first_name +    + last_name
        imageUrl:image_url
       
       }
       await connectDB()
       await userdata.findByIdAndUpdate(id, userdata)
     }
   }

   // Inngest Function to delete user from database
   export const syncUserDeleation = inngest.createFunction(
    {
        id: 'delete_user_with_clerk'
    },
     { event: 'clerk/user.deleted'}, 
      async({event}) => {
      const {id} = event.data
      await connectDB()  
      await user.findByIdAnddelete(id)
      }

    }



