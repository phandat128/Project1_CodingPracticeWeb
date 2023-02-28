import prisma from "./prismaClient"

const problemList = [
  {
    id: 5,
    name: 'ALICEADD',
    topic: 'Alice có a cái kẹo, Bob cho Alice b cái kẹo, hỏi Alice có tổng cộng bao nhiêu cái kẹo. Yêu cầu viết chương trình bằng ngôn ngữ C/C++.\n' +
      'Lưu ý giới hạn: a,b<10^19.',
    input: 'Gồm hai dòng, mỗi dòng ghi một số nguyên.',
    output: 'Một dòng chứa số nguyên là kết quả bài toán.',
    exampleInput: '3 5',
    exampleOutput: '8'
  },
  {
    id: 1,
    name: 'C(k,n)',
    topic: 'Given positive integers k and n. Compute the number Q of subsets of {1,…,n} having k elements.',
    input: 'Unique line contains integers n and k (1≤k≤n≤999)',
    output: 'Write the value Q modulo 10^9+7',
    exampleInput: '3 5',
    exampleOutput: '10'
  },
  {
    id: 6,
    name: 'Disjoint Segment',
    topic: 'Given a set of segments X = {(a1, b1), . . . , (an, bn)} in which ai < bi are coordinates of the segment i on a line, i = 1, …, n.  Find a subset of X having largest cardinality in which no two segments of the subset intersect',
    input: 'Line 1: contains a positive integer n (1 <= n <= 100000)\n' +
      'Line i+1 (i= 1,...,n): contains ai and bi (0 <= ai <= bi <= 1000000)',
    output: 'Number of segments in the solution found.',
    exampleInput: '6\n0 10\n3 7\n6 14\n9 11\n12 15\n17 19',
    exampleOutput: '4'
  },
  {
    id: 7,
    name: 'Bus inter-city',
    topic: 'Có n thành phố 1, 2, ..., n. Giữa 2 thành phố i và j có thể có 1 con đường (2 chiều) kết nối giữa chúng.\n' +
      'Mỗi thành phố i có tuyến buýt i với C[i] là giá vé mỗi khi lên xe và D[i] là số thành phố tối đa mà buýt i có thể đi đến trên 1 hành trình đi qua các con đường kết nối.\n' +
      'Hãy tìm cách đi từ thành phố 1 đến thành phố n với số tiền phải trả là ít nhất',
    input: 'Dòng 1: chứa 2 số nguyên dương n và m trong đó n là số thành phố và m là số con đường kết nối các thành phố (1 <= n <= 5000, 1 <= m <= 10000)\n' +
      'Dòng i+1 (i = 1,2,...,n): chứa 2 số nguyên dương C[i] và D[i] (1 <= C[i] <= 10000, 1 <= D[i] <= 100)\n' +
      'Dòng n+1+i (i = 1, 2, ..., m): chứa 2 số nguyên dương i và j trong đó giữa thành phố i và j có con đường kết nối',
    output: 'Số tiền tối thiểu phải bỏ ra để đi buýt từ thành phố 1 đến thành phố n',
    exampleInput: '6 6\n10 2\n30 1\n50 1\n20 3\n30 1\n20 1\n1 2\n1 3\n1 5\n2 4\n2 5\n4 6',
    exampleOutput: '30'
  },
  {
    id: 8,
    name: 'CBUS',
    topic: 'There are n passengers 1, 2, …, n. The passenger i want to travel from point i to point i + n (i = 1,2,…,n). There is a bus located at point 0 and has k places for transporting the passengers (it means at any time, there are at most k passengers on the bus). You are given the distance matrix c in which c(i,j) is the traveling distance from point i to point j(i, j = 0,1,…, 2n).Compute the shortest route for the bus, serving n passengers and coming back to point 0.',
    input: 'Line 1 contains n and k (1≤n≤11,1≤k≤10)\n' +
      'Line i+1 (i=1,2,…,2n+1) contains the (i−1)th line of the matrix c (rows and columns are indexed from 0,1,2,..,2n).',
    output: 'Unique line contains the length of the shortest route.',
    exampleInput: '3  2 \n' +
      '0  8  5  1  10  5  9 \n' +
      '9  0  5  6  6  2  8 \n' +
      '2  2  0  3  8  7  2 \n' +
      '5  3  4  0  3  2  7 \n' +
      '9  6  8  7  0  9  10 \n' +
      '3  8  10  6  5  0  2 \n' +
      '3  4  4  5  2  2  0',
    exampleOutput: '25'
  }
]

async function main(){
  await prisma.Problem.deleteMany({})
  await prisma.Problem.create({
    data: problemList
  })
}

main()