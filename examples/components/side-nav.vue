<template>
  <div class="side-nav">
    <ul>
      <li v-for="navItem in navList" :key="navItem.name" class="nav-item">
        <router-link v-if="navItem.path" active-class="active" :to="navItem.path">{{ navItem.name }}</router-link>
        <ul v-else-if="navItem.children" class="sub-nav">
          <li class="nav-title">{{ navItem.name }}</li>
          <li v-for="childItem in navItem.children" :key="childItem.name" class="nav-item">
            <router-link v-if="childItem.path" active-class="active" :to="childItem.path">{{ childItem.name }}</router-link>
          </li>
        </ul>
        <ul v-else-if="navItem.groups" class="nav-group">
          <li class="nav-title">{{ navItem.name }}</li>
          <ul v-for="groupsItem in navItem.groups" :key="groupsItem.name">
            <li class="nav-group-title">{{ groupsItem.groupName }}</li>
            <li v-for="listItem in groupsItem.list" :key="listItem.name" class="nav-item">
              <router-link active-class="active" :to="listItem.path">{{ listItem.name }}</router-link>
            </li>
          </ul>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        {
          name: '更新日志',
          path: '/component/changeLog'
        },
        {
          name: '开发指南',
          children: [
            {
              name: '安装',
              path: '/component/installation'
            },
            {
              name: '快速上手',
              path: '/component/quickstart'
            }
          ]
        },
        {
          name: '组件',
          groups: [
            {
              groupName: 'Basic',
              list: [
                {
                  name: 'Button 按钮',
                  path: '/component/btn'
                },
                {
                  name: 'Button 按钮2',
                  path: '/component/button'
                }
              ]
            },
            {
              groupName: 'Form',
              list: [
                {
                  name: 'Input 输入框',
                  path: '/component/input'
                },
                {
                  name: 'Input 输入框2',
                  path: '/component/input'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.side-nav {
  position: fixed;
  width: 270px;
  height: auto;
  zoom: 1;
  display: block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 20px;
  ul {
    width: 250px;
    margin: 0;
    padding: 0;
    list-style: none;
    .nav-item {
      a {
        font-size: 16px;
        color: #333;
        line-height: 40px;
        height: 40px;
        margin: 0;
        padding: 0 25px;
        text-decoration: none;
        display: block;
        position: relative;
        transition: .15s ease-out;
        font-weight: 700;
      }
      a:hover, a.active {
        color: #409eff;
      }
      .sub-nav, .nav-group {
        .nav-title {
          font-size: 16px;
          color: #333;
          line-height: 40px;
          height: 40px;
          margin-top: 15px;
          padding: 0 25px;
          text-decoration: none;
          display: block;
          position: relative;
          transition: .15s ease-out;
          font-weight: 700;
        }
        .nav-group-title {
          font-size: 12px;
          color: #999;
          line-height: 26px;
          margin-top: 15px;
          padding: 0 25px;
        }
        .nav-item {
          a {
            display: block;
            height: 40px;
            color: #444;
            line-height: 40px;
            font-size: 14px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-weight: 400;
          }
          a:hover, a.active {
            color: #409eff;
          }
        }
      }
    }
  }
}
</style>
