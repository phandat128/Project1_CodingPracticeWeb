import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function deleteAll() {
    const all = await prisma.problem.deleteMany({})
    console.log(all)
}

async function update(){
    const problem = await prisma.problem.update({
        where: {id: 5,},
        data:{
            topic: "Alice có a cái kẹo, Bob cho Alice b cái kẹo, hỏi Alice có tổng cộng bao nhiêu cái kẹo. Yêu cầu viết chương trình bằng ngôn ngữ C/C++.\nLưu ý giới hạn: a,b<10^19."
        }

    })
}

//update()

async function main (){
    const problem = await prisma.Problem.create({
        data: {
            name: "Compute C_k_n",
            topic: "Given two positive integers k and n. Compute C(k,n) which is the number of ways to select k objects from a given set of n objects.",
            input: "Two positive integers k and n (1 <= k,n <= 999).",
            output: "Write the value C(k,n) modulo 10^9+7.",
            exampleInput: "3  5",
            exampleOutput: "10",
        },
    })
    console.log(problem)
}

//deleteAll()

export default prisma