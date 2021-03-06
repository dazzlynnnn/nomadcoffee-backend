import client from "../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_, {
      username,
      email,
      name,
      location,
      password,
      avatarURL,
      githubUsername,
    }) => {
      // check if username or email are already on DB
      const existingUser = await client.user.findFirst({
        where: {
          OR: [
            {
              username,
            },
            {
              email,
            }
          ],
        },
      });
      if (existingUser) {
        return "ok:false";
      }

      // hash password
      const uglyPassword = await bcrypt.hash(password, 10);

      // save and return the user
      try {
        const user = await client.user.create({
          data: {
            username,
            email,
            name,
            location,
            password: uglyPassword,
            avatarURL,
            githubUsername,
          }
        });
        if (user) {
          return "ok:true";
        }
      } catch (e) {
        return `error:${e}`;
      }
    },
  }
} 