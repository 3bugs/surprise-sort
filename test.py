def sort(a):
    n = len(a)
    for i in range(n):
        for j in range(n):
            if a[i] > a[j]:
                temp = a[i]
                a[i] = a[j]
                a[j] = temp

my_arr = [5, 3, 7, 4, 2, 0, 8, 6, 9, 1]
print(f"Before sorting: {my_arr}")
sort(my_arr)
print(f"After sorting: {my_arr}")
