import os
from pathlib import Path

def generate_tree(directory='.', ignore_folders=None, prefix='', max_depth=None, current_depth=0):
    """
    生成目录树结构
    
    Args:
        directory: 目标目录
        ignore_folders: 需要忽略的文件夹列表
        prefix: 前缀（用于递归显示层级）
        max_depth: 最大深度限制
        current_depth: 当前深度
    """
    if ignore_folders is None:
        ignore_folders = [
            'node_modules'
        ]
    
    if max_depth is not None and current_depth >= max_depth:
        return
    
    directory = Path(directory)
    
    try:
        # 获取目录下的所有项目并排序
        items = sorted(directory.iterdir(), key=lambda x: (x.is_file(), x.name.lower()))
        
        for i, item in enumerate(items):
            # 跳过隐藏文件（以.开头的文件，除了重要的配置文件）
            if item.name.startswith('.') and item.name not in ['.gitignore', '.env.example']:
                continue
                
            # 跳过指定的文件夹
            if item.is_dir() and item.name in ignore_folders:
                continue
            
            # 确定是否是最后一个项目
            is_last = i == len(items) - 1
            
            # 选择合适的符号
            if is_last:
                current_prefix = '└── '
                next_prefix = prefix + '    '
            else:
                current_prefix = '├── '
                next_prefix = prefix + '│   '
            
            # 打印当前项目
            print(f"{prefix}{current_prefix}{item.name}")
            
            # 如果是目录，递归处理
            if item.is_dir():
                generate_tree(
                    item, 
                    ignore_folders, 
                    next_prefix, 
                    max_depth, 
                    current_depth + 1
                )
                
    except PermissionError:
        print(f"{prefix}├── [权限被拒绝]")

def save_tree_to_file(directory='.', output_file='directory_tree.txt', ignore_folders=None, max_depth=None):
    """将目录树保存到文件"""
    import sys
    from io import StringIO
    
    # 重定向输出到字符串
    old_stdout = sys.stdout
    sys.stdout = mystdout = StringIO()
    
    try:
        print(f"{Path(directory).resolve().name}/")
        generate_tree(directory, ignore_folders, max_depth=max_depth)
        
        # 获取输出内容
        tree_content = mystdout.getvalue()
        
        # 恢复标准输出
        sys.stdout = old_stdout
        
        # 保存到文件
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(tree_content)
            
        print(f"目录树已保存到: {output_file}")
        
    finally:
        sys.stdout = old_stdout

if __name__ == "__main__":
    print("项目目录树:")
    print("=" * 50)
    
    # 自定义忽略的文件夹
    ignore_list = [
        'node_modules',
        '.git', 
        '__pycache__',
        '.vscode',
        'dist',
        'build',
        '.vitepress/cache',
        '.vitepress/dist'
    ]
    
    # 显示当前目录名
    current_dir = Path('.').resolve()
    print(f"{current_dir.name}/")
    
    # 生成目录树
    generate_tree('.', ignore_folders=ignore_list, max_depth=5)
    
    print("\n" + "=" * 50)
    
    # 询问是否保存到文件
    save_choice = input("是否将目录树保存到文件？(y/n): ").strip().lower()
    if save_choice in ['y', 'yes', '是']:
        save_tree_to_file('.', 'project_tree.txt', ignore_folders=ignore_list, max_depth=5)
