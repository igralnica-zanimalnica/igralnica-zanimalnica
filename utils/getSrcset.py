from PIL import Image
from pillow_heif import register_heif_opener

import os

def resize_and_convert(input_path, output_path, dimensions):
    """
    Resize an image to multiple dimensions and convert it to WebP format.

    Parameters:
    - input_path (str): Path to the input image file (JPEG or WebP).
    - output_path (str): Path to save the resized and converted images.
    - dimensions (list): List of integers representing the width or height for each desired size.
    """
    register_heif_opener()
    portrait = False
    original_filename = os.path.splitext(os.path.basename(input_path))[0]
    
    with Image.open(input_path) as img:
        base_width, base_height = img.size
        for size in dimensions:
            if base_width > base_height:
                width = size
                height = int((float(size) / base_width) * base_height)
                

            else:
                height = size
                width = int((float(size) / base_height) * base_width)
                portrait = True

            
            output_filename = f"{output_path}/{original_filename}@{str(height) + 'h' if portrait else str(width) + 'w'}.webp"
            if (base_width < width) or (base_height < height):
                img.convert("RGB").save(output_filename, "WEBP")
            else:
                resized_img = img.resize((width, height), Image.Resampling.LANCZOS)
            resized_img.convert("RGB").save(output_filename, "WEBP")
        img.convert("RGB").save(f"{output_path}/{original_filename}.webp", "WEBP")
if __name__ == "__main__":
    input_image_path = "homework.HEIC"
    output_folder_path = "../public/images/school-zanimalnya"
    
    # Specify the dimensions you want
    resize_dimensions = [600, 1000, 2000, 3000]  # Provide only width or height

    resize_and_convert(input_image_path, output_folder_path, resize_dimensions)
