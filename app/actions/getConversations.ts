import prisma from '@/app/lib/prismadb'
import getCurrentUser from "./getCurrentUser"

const getConversations = async () => {
    const currentUser = await getCurrentUser();
  
    if (!currentUser?.id) {
      return [];
    }
  
    try {
      const conversations = await prisma.conversation.findMany({
        orderBy: {
          lastMessageAt: "desc",
        },
        where: {
          userIds: {
            has: currentUser.id,
          },
        },
        include: {
          users: true,
          messages: {
            include: {
              senderId: true,
              seen: true,
            },
          },
        },
      });
  
      return conversations;
    } catch (error: any) {
      return [];
    }
  };
  
  export default getConversations;