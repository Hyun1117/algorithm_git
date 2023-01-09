#include<iostream>

using namespace std;
int Fin(int N)
{
	
	if (N <= 1)
		return N;
	else
		return Fin(N - 1) + Fin(N - 2);
}
int main()
{
	int N;
	cin >> N;
	cout << Fin(N);
	return 0;
}