#include<bits/stdc++.h>
using namespace std;

typedef struct pair<int, int> ii;
const int NMAX = 5001;
const long long INF = 1e9;

int N;
int C[NMAX], D[NMAX];
vector<int> X[NMAX];
vector<ii> Y[NMAX];
bool mark[NMAX];
long long dist[NMAX];

void input(){
    int M;
    cin >> N >> M;
    for (int i = 1; i <= N; i++){
        cin >> C[i] >> D[i];
        dist[i] = INF;
    }
    int u, v;
    for (int i = 1; i <= M; i++){
        cin >> u >> v;
        X[u].push_back(v);
        X[v].push_back(u);
    }
}

void DFS(int u,int start_node, int depth){
    mark[u] = true;
    if (u != start_node) {
        Y[start_node].push_back({C[start_node], u});
    }
    if (depth == D[start_node]) return;
    for (int v: X[u]){
        if (mark[v]) continue;

        DFS(v, start_node, depth + 1);
    }
}

void convert(){
    for (int i = 1; i <= N; i++){
        for (int j = 1; j <= N; j++){
            mark[j] = false;
        }
        DFS(i, i, 0);
    }
}

void dijkstra(){
    priority_queue<ii, vector<ii>, greater<ii>> pq;
    dist[1] = 0;
    for (ii x: Y[1]){
        dist[x.second] = x.first;
    }
    for (int i = 2; i <= N; i++){
        pq.push({dist[i], i});
    }
    while(!pq.empty()){
        ii top = pq.top();
        pq.pop();
        int u = top.second; //đỉnh
        int d = top.first; // khoảng cách từ 1 đến u
        for (ii x: Y[u]){ // với mỗi đỉnh kề u
            int v = x.second;
            int w = x.first;
            if (dist[v] > d + w) dist[v] = d + w;
        }
    }
}

int main(){
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);
    input();
    convert();
    dijkstra();
    /*for (int i = 1; i <= N; i++){
        for (int x: X[i]){
            cout << x << " ";
        }
        cout << endl;
    }
    for (int i = 1; i <= N; i++){
        cout << i << endl;
        for (ii x: Y[i]){
            cout << x.first << " " << x.second << endl;
        }
        cout << endl;
    }*/
    cout << dist[N];
    return 0;
}

