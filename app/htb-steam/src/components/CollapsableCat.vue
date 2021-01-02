<template>
  <div class="wrapperButton">
    <b-button v-b-toggle.collapse-3 class="m-1">Is this game relevant to you?
      <b-icon-file-minus-fill></b-icon-file-minus-fill>
      <b-icon-file-plus-fill></b-icon-file-plus-fill>
    </b-button>
    <b-collapse id="collapse-3">
    <b-card>
      <ul>
        <li v-for="(cat,index) in categories" :key="`cat-${index}`">{{cat.description}}</li>
      </ul>
    </b-card>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props:{
    categories:Array
  }
}
</script>

<style lang="scss" scoped>
@import '../global/variables.scss';

.wrapperButton{
  margin-top: 20px;
}
.m-1{
  margin-bottom: 0;
  background-color: $bgColDb;
  color:$whiten;
  font-size: 15px;
  padding: 10px 18px;
  border: none;
  width: 100%;
  margin:0!important;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius:0px;
  &:focus{
    box-shadow: none;
  }
  .bi-file-minus-fill{
    margin-left: 10px;
  }
  .bi-file-plus-fill{
    margin-left: 10px;
  }
  &.not-collapsed{
    .bi-file-minus-fill{
      display:inline-block;
    }
     .bi-file-plus-fill{
      display:none;
    }
  }
  &.collapsed{
    .bi-file-minus-fill{
      display:none;
    }
    .bi-file-plus-fill{
      display:inline-block;
    }
  }
}
#collapse-3{
    .card{
      background: $cardGradient;
      color:$lblue;
      border-radius: 0;
      border: none;
      .card-body{
        font-size: 13px;
        ul{
          padding-left: 0;
          list-style: none;
          margin-bottom: 0;
        }
      }
    }
  }
</style>