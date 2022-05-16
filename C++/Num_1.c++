#include <iostream>

using namespace std;

int main(void) {
	
	int max = -1;
	int min = 1001;
	int temp;
	int n;

	cin >> n;

	for (int i = 0; i < n; i++) {
		cin >> temp;
		if (temp > max) max = temp;
		if (temp < min) min = temp;
	}

	cout << max - min << "\n";

}