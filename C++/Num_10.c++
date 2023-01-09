#include <iostream>
using namespace std;
int main()
{
	int N = 0;

	cin >> N;
	if (N == 1) { cout << "*" << "\n"; return 0; }
	
	for (int i = 1; i <= N * 2; i++)
	{
		for (int j = 1; j <= N; j++)
		{
			if (i % 2 == 1)
			{
				if (j % 2 == 0)
					cout << " ";
				else
					cout << "*";
			}
			else
			{
				if (j % 2 == 0)
					cout << "*";
				else cout << " ";
			}
			
		}
		cout << "\n";
	}
	
	return 0;
 }