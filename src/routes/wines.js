
export default {
  path: '/wines',
  props: true,
  component: () => import(/* webpackChunkName: "wines" */ "@/ui/wines/Index"),
  children: [
    {
      path: "",
      name: "wines:list",
      component: () =>
        import(/* webpackChunkName: "wines-list" */ "@/ui/wines/List"),
    },
    {
      path: ":id",
      props: true,
      name: "wines:show",
      component: () =>
        import(/* webpackChunkName: "wines-show" */ "@/ui/wines/Show"),
    },
  ]
}