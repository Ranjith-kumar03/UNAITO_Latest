import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string = "") {
    if (value.length === 0 || filterString === "") {
      return value;
    }
    const fileterdValue = [];
    for (const item of value) {
      if (item.hasOwnProperty("userName")) {
        let name = item["userName"];
        if (name.startsWith(filterString)) {
          fileterdValue.push(item);
        }
      } //Email id is added because project name also has customer name soe for customer unique filter email id is given
      else if (item.hasOwnProperty("customerName") && item.hasOwnProperty("emailId")) {
        let name = item["customerName"];
        if (name.startsWith(filterString)) {
          fileterdValue.push(item);
        }
      }else if (item.hasOwnProperty("projectName")) {
        let name = item["projectName"];
        if (name.startsWith(filterString)) {
          fileterdValue.push(item);
        }
      }
    }
    return fileterdValue;
  }
}
