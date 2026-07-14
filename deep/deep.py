answer = input("What is the Answer to the Great Question of Life, the Universe, and Everything? ")
clean_answer = answer.strip().lower()

if clean_answer == "42" or clean_answer == "forty-two" or clean_answer == "forty two":
    print("Yes")
else:
    print("No")
