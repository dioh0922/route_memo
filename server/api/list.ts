export default defineEventHandler(async (event) => {
    const list = await prisma.plan_memo.findMany()
    return {
      list: list,
    }
  })