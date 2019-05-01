import { NgModule } from '@angular/core';

/* Routing Imports */
import { RouterModule } from '@angular/router';
import * as routingPaths from '../../routes/RoutingPaths';

/* Import Components */
import { ProductListComponent } from './product-list.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        { path: routingPaths.PRODUCTS, component: ProductListComponent }
      ])],
    exports: [RouterModule]
  })
export class ProductRouting { }
  