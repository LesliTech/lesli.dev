#!/bin/bash

# Source folder
source_folder="../LesliBuilder/engines"

# Destination folder
destination_folder="./source/engines"

# Loop through each engine folder
for engine_folder in "$source_folder"/*/; do
  engine_name=$(basename "$engine_folder")
  
  # Skip the "Lesli" engine
  if [ "$engine_name" != "Lesli" ]; then

   mkdir -p "$destination_folder/$engine_name"
    # Copy the content of the "docs" folder to the destination
    cp -R "$engine_folder/docs/"* "$destination_folder/$engine_name/"
    echo "Copied content of docs folder for $engine_name"
  fi
done

echo "Copy process completed successfully!"
