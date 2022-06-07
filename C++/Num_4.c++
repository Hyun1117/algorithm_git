#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <algorithm>
using namespace std;

//시작지점으로 부터 가장 멀리있는 지점과 같은거리를 갖고 가장 낮은 번호를 갖는 번호를 출력해야함
//다익스트라 알고리즘?? 이걸 써야하나??
#define MAX_M 50001
#define MAX_N 20001
#define INF 987654321
vector<int>list[MAX_M];
int dist[MAX_N];
int start_node, N, M;
void stra() {
	priority_queue<pair<int, int>> pq;
	pq.push({ 0, start_node });
	int now_node;

	while (pq.empty() == false) {
		now_node = pq.top().second;
		pq.pop();
		for (int i = 0; i < list[now_node].size(); i++) {
			int new_value = dist[now_node] + 1;
			int before_value = dist[list[now_node][i]];

			if (new_value < before_value) {
				dist[list[now_node][i]] = new_value;
				pq.push({ -1 * new_value, list[now_node][i] });
			}
		}
	}
}
bool compare(pair<int, int> a, pair<int, int> b) {
	return a.second < b.second;
}
int main()
{
	int max_value;
	cin >> N >> M;
	start_node = 1;
	int start, end, weight;
	for (int i = 0; i < M; i++) {
		cin >> start >> end;
		list[start].push_back(end);
		list[end].push_back(start);
	}
	for (int i = 1; i <= N; i++) {
		dist[i] = INF;
	}

	dist[1] = 0;

	stra();

	max_value = *max_element(dist + 1, dist + N);
	int count = 0;
	int idx = 0;
	for (int i = 1; i <= N; i++) {
		if (dist[i] == max_value) {
			count++;
			if (count == 1)
				idx = i;
		}
	}

	cout << idx<<" "<< max_value<<" "<< count;
}