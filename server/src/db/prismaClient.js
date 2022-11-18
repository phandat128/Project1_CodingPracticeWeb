import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

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

export default prisma