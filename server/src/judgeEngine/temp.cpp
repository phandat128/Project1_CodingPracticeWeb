#include<stdio.h>
int k,n,c[1001][1001];
long long C(int k,int n){
	if (k==0||k==n) return 1;
	else {
		if (c[k][n]==-1) {
			c[k][n]= (C(k-1,n-1)+C(k,n-1))%1000000007;
			return c[k][n];
		}
		else return c[k][n];
	}
}
int main (){
	for (int i=0;i<=1000;i++){
		for (int j=0;j<=1000;j++) c[i][j]=-1;
	}
	scanf("%d%d",&k,&n);
	printf("%ld",C(k,n));
	return 0;
}
