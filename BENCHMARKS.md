
vite (node_modules/.vite) and nuxt (.nuxt) cache cleared before each runs

env
- wsl 1.1.3.0
- windows 10.0.25300.1000
- node v18.13.0

render
 - no vue file / no ts
 - render function


    ```js
    export default {
      name: 'Component0',
      props: {
        props1: { type: String, required: true },
        props2: { type: String, default: 'bar' },
        props3: { type: String, default: 'baz' },
        props4: { type: Object, default: () => ({ sub1: true, sub2: 42 }) },
        props5: { type: Array, default: () => (['foo', 'bar', 'baz']) },
        props6: { type: Array, default: () => ([{ sub1: true, sub2: 42 }]) },
      },
      setup(props) {
        return () => h('div', {}, [
          h('h2', {}, 'Component0'), 
          h('pre', {}, JSON.stringify(props, null, 2))
        ])
      },
    }
    ```

base :
- no ts 
- no defineComponent 
- props js options format

    ```vue
    <script>
    export default {
      name: 'Component0',
      props: {
        props1: { type: String, required: true },
        props2: { type: String, default: 'bar' },
        props3: { type: String, default: 'baz' },
        props4: { type: Object, default: () => ({ sub1: true, sub2: 42 }) },
        props5: { type: Array, default: () => (['foo', 'bar', 'baz']) },
        props6: { type: Array, default: () => ([{ sub1: true, sub2: 42 }]) },
      },
      setup(props) { return { props } },
    }
    </script>

    <template>
      <div>
        <h2>Component0</h2>
        <pre>{{ props }}</pre>
      </div>
    </template>
    ```

setup-ts :
- setup lang=ts
- defineProps with interface
- withDefaults object

    ```vue
    <script setup lang="ts">
    const props = withDefaults(defineProps<{
      props1: string;
      props2?: string;
      props3?: 'foo' | 'bar' | 'baz';
      props4?: { sub1?: boolean; sub2?: number };
      props5?: string[];
      props6?: { sub1?: boolean; sub2?: number }[];
    }>(), {
      props1: 'foo',
      props2: 'bar',
      props3: 'baz',
      props4: () => ({ sub1: true, sub2: 42 }),
      props5: () => (['foo', 'bar', 'baz']),
      props6: () => ([{ sub1: true, sub2: 42 }]),
    });
    </script>

    <template>
      <div>
        <h2>Component0</h2>
        <pre>{{ props }}</pre>
      </div>
    </template>
    ```



## Nuxt 3.0.0 with Nitro 1.0.0 



### Render
---


#### Nuxt 3.0.0 with Nitro 1.0.0 - 5000 components - render

✔ Nitro built in 4622 ms
ℹ Vite client warmed up in 18803ms

✔ Nitro built in 4038 ms
ℹ Vite client warmed up in 18374ms

✔ Nitro built in 4292 ms 
ℹ Vite client warmed up in 18012ms 




#### Nuxt 3.0.0 with Nitro 1.0.0 - 3000 components - render

✔ Nitro built in 3049 ms
ℹ Vite client warmed up in 11308ms 

✔ Nitro built in 4970 ms 
ℹ Vite client warmed up in 10708ms 

✔ Nitro built in 5027 ms               
ℹ Vite client warmed up in 10938ms 



#### Nuxt 3.0.0 with Nitro 1.0.0 - 1000 components - render

✔ Nitro built in 2241 ms          
ℹ Vite client warmed up in 4528ms

✔ Nitro built in 1372 ms                 
ℹ Vite client warmed up in 3948ms

✔ Nitro built in 2443 ms         
ℹ Vite client warmed up in 4156ms 




#### Nuxt 3.0.0 with Nitro 1.0.0 - 500 components - render

✔ Nitro built in 1836 ms
ℹ Vite client warmed up in 2830ms

✔ Nitro built in 925 ms
ℹ Vite client warmed up in 2518ms   

✔ Nitro built in 1626 ms
ℹ Vite client warmed up in 2557ms


#### Nuxt 3.0.0 with Nitro 1.0.0 - 100 components - render


✔ Nitro built in 689 ms 
ℹ Vite client warmed up in 1442ms   

✔ Nitro built in 706 ms 
ℹ Vite client warmed up in 1468ms 

✔ Nitro built in 650 ms       
ℹ Vite client warmed up in 1404ms 





### Base
---


#### Nuxt 3.0.0 with Nitro 1.0.0 - 5000 components - base
✔ Nitro built in 10767 ms        
ℹ Vite client warmed up in 26729ms

✔ Nitro built in 10790 ms      
ℹ Vite client warmed up in 25956ms 

✔ Nitro built in 14442 ms                
ℹ Vite client warmed up in 26224ms



#### Nuxt 3.0.0 with Nitro 1.0.0 - 3000 components - base
✔ Nitro built in 9972 ms              
ℹ Vite client warmed up in 21477ms 

✔ Nitro built in 11416 ms                          
ℹ Vite client warmed up in 22932ms

✔ Nitro built in 9923 ms         
ℹ Vite client warmed up in 16803ms 



#### Nuxt 3.0.0 with Nitro 1.0.0 - 1000 components - base
✔ Nitro built in 2738 ms 
ℹ Vite client warmed up in 5296ms

✔ Nitro built in 3608 ms
ℹ Vite client warmed up in 5188ms

✔ Nitro built in 3500 ms            
ℹ Vite client warmed up in 5020ms




#### Nuxt 3.0.0 with Nitro 1.0.0 - 500 components - base

✔ Nitro built in 1798 ms        
ℹ Vite client warmed up in 3330ms

✔ Nitro built in 509 ms                                   
ℹ Vite client warmed up in 3323ms 

✔ Nitro built in 1623 ms             
ℹ Vite client warmed up in 3232ms      




#### Nuxt 3.0.0 with Nitro 1.0.0 - 100 components - base

✔ Nitro built in 812 ms                
ℹ Vite client warmed up in 1575ms  

✔ Nitro built in 824 ms     
ℹ Vite client warmed up in 1551ms    

✔ Nitro built in 842 ms                                  
ℹ Vite client warmed up in 1571ms   



### Setup TS
---


#### Nuxt 3.0.0 with Nitro 1.0.0 - 5000 components - setup ts

✔ Nitro built in 14326 ms              
ℹ Vite client warmed up in 30765ms  

✔ Nitro built in 13888 ms           
ℹ Vite client warmed up in 29714ms

✔ Nitro built in 14227 ms            
ℹ Vite client warmed up in 32203ms 




#### Nuxt 3.0.0 with Nitro 1.0.0 - 3000 components - setup ts

✔ Nitro built in 9707 ms                        
ℹ Vite client warmed up in 18567ms 

✔ Nitro built in 8398 ms 
ℹ Vite client warmed up in 17047ms   

✔ Nitro built in 8134 ms         
ℹ Vite client warmed up in 16526ms  




#### Nuxt 3.0.0 with Nitro 1.0.0 - 1000 components - setup ts

✔ Nitro built in 4139 ms            
ℹ Vite client warmed up in 6337ms 

✔ Nitro built in 3212 ms              
ℹ Vite client warmed up in 5693ms

✔ Nitro built in 3618 ms      
ℹ Vite client warmed up in 6685ms




#### Nuxt 3.0.0 with Nitro 1.0.0 - 500 components - setup ts

✔ Nitro built in 2185 ms             
ℹ Vite client warmed up in 3773ms 

✔ Nitro built in 2206 ms            
ℹ Vite client warmed up in 3853ms 

✔ Nitro built in 2500 ms              
ℹ Vite client warmed up in 3408ms




#### Nuxt 3.0.0 with Nitro 1.0.0 - 100 components - setup ts

✔ Nitro built in 1362 ms               
ℹ Vite client warmed up in 1843ms

✔ Nitro built in 1207 ms    
ℹ Vite client warmed up in 1643ms  

✔ Nitro built in 965 ms                          
ℹ Vite client warmed up in 1666ms








## Nuxt 3.2.2 with Nitro 2.2.3


### Render
---


#### Nuxt 3.2.2 with Nitro 2.2.3 - 5000 components - render

✔ Nitro built in 8001 ms            
✔ Vite server hmr 22 files in 952.033ms      
ℹ Vite client warmed up in 19246ms  

✔ Nitro built in 7387 ms    
✔ Vite server hmr 22 files in 847.902ms 
ℹ Vite client warmed up in 18189ms 

✔ Nitro built in 7246 ms
✔ Vite server hmr 22 files in 859.489ms
ℹ Vite client warmed up in 17676ms




#### Nuxt 3.2.2 with Nitro 2.2.3 - 3000 components - render

✔ Nitro built in 2949 ms         
✔ Vite server hmr 22 files in 630.903ms   
ℹ Vite client warmed up in 11116ms

✔ Nitro built in 4729 ms
✔ Vite server hmr 22 files in 669.834ms  
ℹ Vite client warmed up in 10785ms 

✔ Nitro built in 5092 ms        
✔ Vite server hmr 22 files in 636.079ms
ℹ Vite client warmed up in 11137ms


#### Nuxt 3.2.2 with Nitro 2.2.3 - 1000 components - render


✔ Nitro built in 2326 ms
ℹ Vite client warmed up in 4046ms
✔ Vite server hmr 22 files in 385.144ms 

✔ Nitro built in 2232 ms        
ℹ Vite client warmed up in 3974ms
✔ Vite server hmr 22 files in 423.131ms

✔ Nitro built in 2206 ms
ℹ Vite client warmed up in 3942ms 
✔ Vite server hmr 22 files in 413.075ms 


#### Nuxt 3.2.2 with Nitro 2.2.3 - 500 components - render

✔ Nitro built in 1645 ms  
ℹ Vite client warmed up in 2720ms  
✔ Vite server hmr 22 files in 376.945ms

✔ Nitro built in 1700 ms 
ℹ Vite client warmed up in 2876ms  
✔ Vite server hmr 22 files in 387.932ms 

✔ Nitro built in 1593 ms
✔ Vite server hmr 22 files in 391.523ms     
ℹ Vite client warmed up in 2813ms 



#### Nuxt 3.2.2 with Nitro 2.2.3 - 100 components - render


✔ Nitro built in 1057 ms
ℹ Vite client warmed up in 1653ms
✔ Vite server hmr 22 files in 360.335ms

✔ Nitro built in 1192 ms 
ℹ Vite client warmed up in 1784ms  
✔ Vite server hmr 22 files in 332.01ms

✔ Nitro built in 1107 ms
ℹ Vite client warmed up in 1649ms
✔ Vite server hmr 22 files in 316.107ms 


### Base
---


#### Nuxt 3.2.2 with Nitro 2.2.3 - 5000 components - base

✔ Nitro built in 15009 ms
✔ Vite server hmr 22 files in 916.598ms
ℹ Vite client warmed up in 28089ms

✔ Nitro built in 15511 ms
✔ Vite server hmr 22 files in 903.705ms 
ℹ Vite client warmed up in 28194ms

✔ Nitro built in 14560 ms 
✔ Vite server hmr 22 files in 909.72ms 
ℹ Vite client warmed up in 27233ms 


#### Nuxt 3.2.2 with Nitro 2.2.3 - 3000 components - base

✔ Nitro built in 10230 ms   
✔ Vite server hmr 22 files in 671.278ms 
ℹ Vite client warmed up in 17208ms  

✔ Nitro built in 9601 ms
✔ Vite server hmr 22 files in 834.525ms
ℹ Vite client warmed up in 16929ms   

✔ Nitro built in 9087 ms 
✔ Vite server hmr 22 files in 780.723ms
ℹ Vite client warmed up in 16763ms 



#### Nuxt 3.2.2 with Nitro 2.2.3 - 1000 components - base


✔ Nitro built in 4498 ms 
ℹ Vite client warmed up in 6508ms
✔ Vite server hmr 22 files in 430.421ms

✔ Nitro built in 3855 ms
ℹ Vite client warmed up in 5625ms
✔ Vite server hmr 22 files in 516.772ms  

✔ Nitro built in 3332 ms
ℹ Vite client warmed up in 6080ms
✔ Vite server hmr 22 files in 514.572ms 


#### Nuxt 3.2.2 with Nitro 2.2.3 - 500 components - base

✔ Nitro built in 2597 ms 
ℹ Vite client warmed up in 3657ms
✔ Vite server hmr 22 files in 408.016ms 

✔ Nitro built in 2702 ms
ℹ Vite client warmed up in 3759ms
✔ Vite server hmr 22 files in 413.808ms  

✔ Nitro built in 2582 ms     
ℹ Vite client warmed up in 3687ms 
✔ Vite server hmr 22 files in 405.959ms  


#### Nuxt 3.2.2 with Nitro 2.2.3 - 100 components - base

✔ Nitro built in 1351 ms 
ℹ Vite client warmed up in 1959ms
✔ Vite server hmr 22 files in 359.441ms 

✔ Nitro built in 1328 ms
ℹ Vite client warmed up in 1904ms
✔ Vite server hmr 22 files in 411.27ms  

✔ Nitro built in 1360 ms
ℹ Vite client warmed up in 1942ms
✔ Vite server hmr 22 files in 367.211ms 




### Setup TS
---


#### Nuxt 3.2.2 with Nitro 2.2.3 - 5000 components - setup ts


✔ Nitro built in 19106 ms           
✔ Vite server hmr 22 files in 961.547ms
ℹ Vite client warmed up in 30996ms

✔ Nitro built in 17667 ms
✔ Vite server hmr 22 files in 965.67ms
ℹ Vite client warmed up in 28932ms

✔ Nitro built in 17800 ms
✔ Vite server hmr 22 files in 962.514ms
ℹ Vite client warmed up in 28980ms




#### Nuxt 3.2.2 with Nitro 2.2.3 - 3000 components - setup ts

✔ Nitro built in 11383 ms
✔ Vite server hmr 22 files in 669.865ms
ℹ Vite client warmed up in 18433ms

✔ Nitro built in 11914 ms
✔ Vite server hmr 22 files in 758.689m
ℹ Vite client warmed up in 18653ms       

✔ Nitro built in 9634 ms
✔ Vite server hmr 22 files in 697.066ms
ℹ Vite client warmed up in 19265ms




#### Nuxt 3.2.2 with Nitro 2.2.3 - 1000 components - setup ts

✔ Nitro built in 5065 ms
✔ Vite server hmr 22 files in 430.976ms
ℹ Vite client warmed up in 7378ms 

✔ Nitro built in 3708 ms
ℹ Vite client warmed up in 6403ms
✔ Vite server hmr 22 files in 458.14ms

✔ Nitro built in 4261 ms 
ℹ Vite client warmed up in 6046ms
✔ Vite server hmr 22 files in 437.208ms




#### Nuxt 3.2.2 with Nitro 2.2.3 - 500 components - setup ts

✔ Nitro built in 2789 ms
ℹ Vite client warmed up in 3841ms
✔ Vite server hmr 22 files in 368.102ms

✔ Nitro built in 2815 ms
ℹ Vite client warmed up in 3897ms
✔ Vite server hmr 22 files in 388.656ms  

✔ Nitro built in 2681 ms 
ℹ Vite client warmed up in 3820ms
✔ Vite server hmr 22 files in 389.767ms 




#### Nuxt 3.2.2 with Nitro 2.2.3 - 100 components - setup ts

 
✔ Nitro built in 1278 ms
ℹ Vite client warmed up in 1868ms
✔ Vite server hmr 22 files in 306.614ms 

✔ Nitro built in 1729 ms
ℹ Vite client warmed up in 2274ms 
✔ Vite server hmr 22 files in 487.537ms  

✔ Nitro built in 1279 ms 
ℹ Vite client warmed up in 1879ms
✔ Vite server hmr 22 files in 341.67ms




#### Nuxt 3.2.2 with Nitro 2.2.3 - 5000 components - render (win)


√ Nitro built in 6863 ms
√ Vite server hmr 22 files in 1047.465ms
i Vite client warmed up in 32505ms  


√ Nitro built in 6822 ms
√ Vite server hmr 22 files in 1051.332ms
i Vite client warmed up in 32658ms 

√ Nitro built in 6992 ms 
√ Vite server hmr 22 files in 1042.724ms 
i Vite client warmed up in 33157ms  



#### Nuxt 3.2.2 with Nitro 2.2.3 - 5000 components - setup ts (win)


√ Nitro built in 14932 ms
√ Vite server hmr 22 files in 1089.073ms 
i Vite client warmed up in 40822ms 


√ Nitro built in 15469 ms
√ Vite server hmr 22 files in 1114.651ms
i Vite client warmed up in 40503ms  


√ Nitro built in 15245 ms 
√ Vite server hmr 22 files in 1130.244ms
i Vite client warmed up in 40617ms