import os
import re

def main():
    directory = '/Users/apple/Downloads/sonithtra_decorporation'
    target_files = [f for f in os.listdir(directory) if f.endswith('.html')]
    
    for filename in target_files:
        filepath = os.path.join(directory, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            contents = f.read()
            
        new_contents = contents
        
        # Specific meta keyword replacements
        new_contents = new_contents.replace('Eagle international export & import, ', '')
        new_contents = new_contents.replace('amir rice export & import company, ', '')
        
        if contents != new_contents:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_contents)
            print(f"Cleaned keywords in {filename}")

if __name__ == '__main__':
    main()
