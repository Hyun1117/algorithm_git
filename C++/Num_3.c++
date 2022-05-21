#include <iostream>
using namespace std;

int main()
{
	int Buger[3];
	int Drink[2];
	int Min_Buger = 9999;
	int Min_Drink = 9999;
	for (int i = 0; i < 3; i++)
	{
		cin >> Buger[i];
		if (Buger[i] < Min_Buger)
			Min_Buger = Buger[i];
	}
	for (int i = 0; i < 2; i++)
	{
		cin >> Drink[i];
		if (Drink[i] < Min_Drink)
			Min_Drink = Drink[i];
	}
	cout << Min_Buger + Min_Drink - 50;
}