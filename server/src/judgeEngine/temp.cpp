#include<stdio.h>
int x[101];
int Solve(){
	int n,m,a[1001],b[1001];
	scanf ("%d%d",&n,&m);
	for (int i=1;i<=n;i++) scanf("%d",&a[i]);
	for (int i=1;i<=m;i++) scanf("%d",&b[i]);
	if (m!=n) return 0;
	else {
		for (int i=1;i<=n;i++) {
			if (a[i]!=b[i]) return 0;
		}
	}
	return 1;
}
int main (){
	int T;
	scanf("%d",&T);
	for (int i=1;i<=T;i++){		
		x[i]=Solve();
	}
	for (int i=1;i<=T;i++) printf("%d\n",x[i]);
}
