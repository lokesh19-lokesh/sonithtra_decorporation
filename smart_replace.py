import os
import re

def main():
    directory = '/Users/apple/Downloads/sonithtra_decorporation'
    target_files = [f for f in os.listdir(directory) if f.endswith('.html')]
    
    for filename in target_files:
        filepath = os.path.join(directory, filename)
        
        with open(filepath, 'r', encoding='utf-8') as f:
            contents = f.read()
            
        # Strategy: 
        # 1. Replace visible text RBK with Sonithtra Decorporation
        # 2. Replace URLs/emails containing rbkinternational, rbkglobal, rbkindustriesltd with sonithtradecorporation
        
        new_contents = contents
        
        # Replace specific company identifiers in text
        new_contents = re.sub(r'\bRBK International\b', 'Sonithtra Decorporation', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'\bRBK Global\b', 'Sonithtra Decorporation', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'\bRBK Group\b', 'Sonithtra Decorporation', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'\bRBK Industries Limited\b', 'Sonithtra Decorporation', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'\bRBK\b', 'Sonithtra Decorporation', new_contents)
        new_contents = re.sub(r'\brbk\b', 'Sonithtra Decorporation', new_contents)
        
        # Replace URLs and domains
        new_contents = re.sub(r'rbkinternational\.com', 'sonithtradecorporation.com', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkinternational\.us', 'sonithtradecorporation.us', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkinternational\.co\.za', 'sonithtradecorporation.co.za', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkinternational\.id', 'sonithtradecorporation.id', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkinternational\.co\.uk', 'sonithtradecorporation.co.uk', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkindustriesltd\.com', 'sonithtradecorporation.com', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkglobal\.ca', 'sonithtradecorporation.ca', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'rbkinternational\.nl', 'sonithtradecorporation.nl', new_contents, flags=re.IGNORECASE)
        
        # Catch any remaining rbk in common email prefixes
        new_contents = re.sub(r'info@rbk[a-z0-9]+\.', 'info@sonithtradecorporation.', new_contents, flags=re.IGNORECASE)
        new_contents = re.sub(r'www\.rbk[a-z0-9]+\.', 'www.sonithtradecorporation.', new_contents, flags=re.IGNORECASE)
        
        if contents != new_contents:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_contents)
            print(f"Updated {filename}")

if __name__ == '__main__':
    main()
