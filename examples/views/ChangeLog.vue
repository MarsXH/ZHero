
<template>
  <div class="page-changelog">
    <ul class="timeline" ref="timeline">
      <change-log ref="changeLog"></change-log>
    </ul>
  </div>
</template>
<script>
import ChangeLog from '@/docs/changeLog.md'
export default {
  components: {
    ChangeLog
  }
}
</script>

<style lang="less">
  .page-changelog {
    padding-bottom: 100px;
    .fr {
      float: right;
      padding: 0;
      &.el-button {
        transform: translateY(-3px);
      }
      a {
        display: block;
        padding: 10px 15px;
        color: #333;
      }
      &:hover a {
        color: #409EFF;
      }
    }
    .heading {
      font-size: 24px;
      margin-bottom: 60px;
      color: #333;
    }
    .timeline {
      padding-bottom: 10px;
      position: relative;
      color: #5e6d82;
      border: 1px solid #eee;
      padding: 20px;
      border-radius: 10px;
      h2 {
        padding: 0 0 10px 0;
      }
      > li {
        position: relative;
        padding-bottom: 15px;
        list-style: none;
        line-height: 1.8;
        border: 1px solid #ddd;
        border-radius: 4px;

        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
      ul {
        padding: 30px 30px 15px;
        ul {
          padding: 0;
          padding-top: 5px;
          padding-left: 27px;
          li {
            padding-left: 0;
            color: #555;
            word-break: normal;
          }
          li::before {
            content: '';
            circle: 4px #fff;
            border: solid 1px #333;
            margin-right: -12px;
            display: inline-block;
            vertical-align: middle;
          }
        }
      }
      li li {
        font-size: 16px;
        list-style: none;
        padding-left: 20px;
        padding-bottom: 5px;
        color: #333;
        word-break: break-all;
        &:before {
          content: '';
          circle: 6px #333;
          transform: translateX(-20px);
          display: inline-block;
          vertical-align: middle;
        }
      }
      i {
        padding: 0 20px;
        display: inline-block;
      }
      h3 {
        margin:0;
        padding: 15px 10px;
        border-bottom: 1px solid #ddd;
        font-size: 20px;
        color: #333;
        font-weight: bold;
        border: 1px solid #eee;
        background: #eee;
        border-radius: 10px;
        margin-top: 40px;
        a {
          opacity: 1;
          font-size: 20px;
          float: none;
          margin-left: 0;
          color: #333;
        }
      }
      h4 {
        margin: 0;
        margin-bottom: -10px;
        font-size: 18px;
        padding: 30px 0 10px 20px;
        padding-top: 30px;
        font-weight: bold;
        border-bottom: 1px solid #eee;
      }
      p {
        margin: 0;
      }
    }
  }
</style>
