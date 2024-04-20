

const getMessages = async ( conversationId: string) => {
    try{
        const messages = await prisma?.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                senderId: true,
                seen: true,
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
        return messages;
    }catch(error: any){
        return [];
    }
}

export default getMessages;