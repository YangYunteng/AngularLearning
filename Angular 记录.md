# Angular 记录



## Angular安装

```shell
npm install -g @angular/cli

//使用镜像（但是可能会出现setTimeout问题）
npm install -g cnpm --registry=https://registry.taobao.org
cnpm install -g @angular/cli
```



## 项目创建



```shell
ng new project_name

#省去依赖的安装直接创建，之后需进入项目进行安装(进去可以使用cnpm进行安装)
ng new project_name --skip-install
npm install

#启动
ng serve --open
```

