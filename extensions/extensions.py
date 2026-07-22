filename = input("File name: ")
clean_name = filename.strip().lower()

if clean_name.endswith(".gif"):
    print("image/gif")
elif clean_name.endswith(".jpg") or clean_name.endswith(".jpeg"):
    print("image/jpeg")
elif clean_name.endswith(".png"):
    print("image/png")
elif clean_name.endswith(".pdf"):
    print("application/pdf")
elif clean_name.endswith(".txt"):
    print("text/plain")
elif clean_name.endswith(".zip"):
    print("application/zip")
else:
    print("application/octet-stream")
