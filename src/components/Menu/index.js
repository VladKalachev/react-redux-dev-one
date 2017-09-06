import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Tree, Icon } from 'antd';

const TreeNode = Tree.TreeNode;

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="b-buttom">
          <Button size="small">Добавить</Button>
          <Button size="small">Изменить</Button>
          <Button size="small">Удалить</Button>
        </div>
        
        <Tree
          showLine={true}
          defaultExpandedKeys={['0-0-0']}
          onSelect={this.onSelect}
          className="b-tree"
        >
          <TreeNode title="МГЭ/847-484" key="0-0">
              <TreeNode title="Заявление" key="0-0-0">
                <TreeNode title="leaf" key="0-0-0-0" />
                <TreeNode title="leaf" key="0-0-0-1" />
                <TreeNode title="leaf" key="0-0-0-2" />
              </TreeNode>
              <TreeNode title="Договор" key="0-0-1">
                <TreeNode title="Новая" key="0-0-1-0" />
                <TreeNode title="В работе" key="0-0-1-1" />
                <TreeNode title="На согласовании" key="0-0-1-2" />
                <TreeNode title="Просрочена" key="0-0-1-3" />
                <TreeNode title="Выполнена" key="0-0-1-4" />
              </TreeNode>
              <TreeNode title="Разделы ПД" key="0-0-2">
                <TreeNode title="leaf" key="0-0-2-0" />
                <TreeNode title="leaf" key="0-0-2-1" />
              </TreeNode>

              <TreeNode title="Сводное замечание" key="0-0-3">
                <TreeNode title="leaf" key="0-0-3-0" />
                <TreeNode title="leaf" key="0-0-3-1" />
              </TreeNode>

              <TreeNode title="Сводное заключение" key="0-0-4">
                <TreeNode title="leaf" key="0-0-4-0" />
                <TreeNode title="leaf" key="0-0-4-1" />
              </TreeNode>

              <TreeNode title="Выпуск заключения" key="0-0-5">
                <TreeNode title="leaf" key="0-0-5-0" />
                <TreeNode title="leaf" key="0-0-5-1" />
              </TreeNode>
          </TreeNode>

          <TreeNode title="МГЭ/847-484" key="0-1">
          <TreeNode title="Заявление" key="0-1-0">
                <TreeNode title="leaf" key="0-1-0-0" />
                <TreeNode title="leaf" key="0-1-0-1" />
                <TreeNode title="leaf" key="0-1-0-2" />
              </TreeNode>
              <TreeNode title="Договор" key="0-1-1">
                <TreeNode title="Новая" key="0-1-1-0" />
                <TreeNode title="В работе" key="0-1-1-1" />
                <TreeNode title="На согласовании" key="0-1-1-2" />
                <TreeNode title="Просрочена" key="0-1-1-3" />
                <TreeNode title="Выполнена" key="0-1-1-4" />
              </TreeNode>
              <TreeNode title="Разделы ПД" key="0-1-2">
                <TreeNode title="leaf" key="0-1-2-0" />
                <TreeNode title="leaf" key="0-1-2-1" />
              </TreeNode>

              <TreeNode title="Сводное замечание" key="0-1-3">
                <TreeNode title="leaf" key="0-1-3-0" />
                <TreeNode title="leaf" key="0-1-3-1" />
              </TreeNode>

              <TreeNode title="Сводное заключение" key="0-1-4">
                <TreeNode title="leaf" key="0-1-4-0" />
                <TreeNode title="leaf" key="0-1-4-1" />
              </TreeNode>

              <TreeNode title="Выпуск заключения" key="0-1-5">
                <TreeNode title="leaf" key="0-1-5-0" />
                <TreeNode title="leaf" key="0-1-5-1" />
              </TreeNode>
          </TreeNode> 

          <TreeNode title="МГЭ/847-484" key="0-2">
            
          </TreeNode> 

        </Tree>
        
        
      </div>
    )
  }
}

export default Menu;
