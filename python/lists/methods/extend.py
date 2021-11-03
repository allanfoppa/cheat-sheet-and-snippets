
def main():
    extend_list()

def extend_list():
    list_one = ['um']
    print(list_one)

    list_two = ['dois']
    print(list_two)

    list_one.extend(list_two)
    print(list_one)

main()