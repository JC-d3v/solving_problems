using System;

namespace ordenacionInsertionSort
{
	class Program
	{
		static void Main(string[] args)
		{
			static void insertion_sort()
			{
				int[] arreglo_ord = { 10, -2, -8, 7, 4 };
				for (int i = 1; i < arreglo_ord.Length; i++)
				{
					var j = i;
					while (j >= 1 && arreglo_ord[j] < arreglo_ord[j - 1])
					{
						var aux = arreglo_ord[j];
						arreglo_ord[j] = arreglo_ord[j - 1];
						arreglo_ord[j - 1] = aux;
						j--;
					}
				}

				foreach (var item in arreglo_ord)
				{
					Console.Write($" {item}");
				}
				Console.WriteLine();
			}
			insertion_sort();
			Console.WriteLine("press any key");
			Console.ReadLine();


		}
	}
}
