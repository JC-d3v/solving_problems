using System;

namespace ordenacionSeleccionSort
{
	class Program
	{
		static void Main(string[] args)
		{
			static void selection_sort()
			{
				int[] arreglo_ord = { 10, -9, 15, -3, 8 };
				for (int i = 0; i < arreglo_ord.Length - 1; i++)
				{
					var min_pos = i;
					var min_val = arreglo_ord[i];
					for (int j = i + 1; j < arreglo_ord.Length; j++)
					{
						if (arreglo_ord[j] < min_val)
						{
							min_pos = j;
							min_val = arreglo_ord[j];
						}
					}
					if (i != min_pos)
					{
						var aux = arreglo_ord[i];
						arreglo_ord[i] = arreglo_ord[min_pos];
						arreglo_ord[min_pos] = aux;
					}
				}

				foreach (var item in arreglo_ord)
				{
					Console.Write($" {item}");
				}
				Console.WriteLine();

			}

			selection_sort();
			Console.WriteLine("press any key");
			Console.ReadLine();
		}
	}
}
