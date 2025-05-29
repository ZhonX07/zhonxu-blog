import os
import zipfile
import datetime
from pathlib import Path

def should_exclude(file_path, base_path):
    """检查文件或目录是否应该被排除"""
    relative_path = os.path.relpath(file_path, base_path)
    
    # 排除的目录和文件
    exclude_patterns = [
        'node_modules',
        '.git',
        '.vscode',
        '__pycache__',
        '.DS_Store',
        'Thumbs.db',
        '*.pyc',
        '*.pyo',
        '.env',
        'dist',
        'build'
    ]
    
    for pattern in exclude_patterns:
        if pattern in relative_path.split(os.sep):
            return True
        if relative_path.endswith(pattern.replace('*', '')):
            return True
    
    return False

def pack_directory(source_dir='.', output_name=None):
    """打包目录下的文件"""
    source_path = Path(source_dir).resolve()
    
    if output_name is None:
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        output_name = f"viteblog_backup_{timestamp}.zip"
    
    print(f"开始打包目录: {source_path}")
    print(f"输出文件: {output_name}")
    
    with zipfile.ZipFile(output_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        file_count = 0
        
        for root, dirs, files in os.walk(source_path):
            # 排除不需要的目录
            dirs[:] = [d for d in dirs if not should_exclude(os.path.join(root, d), source_path)]
            
            for file in files:
                file_path = os.path.join(root, file)
                
                # 检查是否应该排除此文件
                if should_exclude(file_path, source_path):
                    continue
                
                # 计算相对路径
                arcname = os.path.relpath(file_path, source_path)
                
                try:
                    zipf.write(file_path, arcname)
                    file_count += 1
                    print(f"已添加: {arcname}")
                except Exception as e:
                    print(f"警告: 无法添加文件 {arcname}: {e}")
        
        print(f"\n打包完成!")
        print(f"总共打包了 {file_count} 个文件")
        print(f"输出文件: {os.path.abspath(output_name)}")
        print(f"文件大小: {os.path.getsize(output_name) / 1024 / 1024:.2f} MB")

if __name__ == "__main__":
    # 可以指定输出文件名，如果不指定则使用时间戳
    pack_directory()
    
    # 或者指定自定义名称
    # pack_directory(output_name="my_viteblog_backup.zip")
