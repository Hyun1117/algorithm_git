#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <algorithm>
using namespace std;


vector<int>list[101];
bool check_list[101];
int cnt = 0;
void sol(int a)
{
	check_list[a] = true;
	for (int i = 0; i < list[a].size(); i++)
	{
		int b = list[a][i];
		if (!check_list[b])
		{
			sol(b);
			cnt++;
		}
	}
}
int main()
{
	int n, link;
	cin >> n >> link;
	for (int i = 0; i < link; i++)
	{
		int x, y;
		cin >> x >> y;
		list[x].push_back(y);
		list[y].push_back(x);
	}
	sol(1);
	cout << cnt << endl;
}
