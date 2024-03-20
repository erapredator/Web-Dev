def cat_dog(str):
  cat_count = str.count("cat")
  dog_count = str.count("dog")
  if cat_count == dog_count:
    return True
  else:
    return False
