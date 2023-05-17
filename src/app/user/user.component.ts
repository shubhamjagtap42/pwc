import { Component } from '@angular/core';
import { UserserviceService } from 'src/services/userservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  value1: any;

  uploadedFiles: any[] = [];
  multiple: string[] = [];
  maxFileSize: any;
  // Isdownload = false;
  files: any;
  myarray: any[] = [];
  isavailable = false;
  selectedFile: any;
  currentfile: any;
  route: any;

  constructor(private user: UserserviceService) {}

  selectFile(event: any) {
    this.selectedFile = event.target.files;
  }

  onUpload(event: any) 
  {
    
    // let fileName = this.selectedFile[0].name;
    // let obj = { fileName: fileName };
    // console.log(obj);

    // this.myarray.push(fileName);
    // this.user.postfile(obj).subscribe((data) => {
    //   console.log(data);
    // });
    // console.log(this.selectedFile[0].name);

    const file = event.target.files[0];
    const formdata = new FormData();
    formdata.append('file',file);

    this.user.postfile(formdata).subscribe((data:any)=>{

      console.log(data,'data');
      
    })

    // window.location.reload();

    // this.Isdownload = true;
  }

  ondownload() 
  {

    
   
    console.log(this.selectedFile ,'selected file');
    
    // const docfilename = this.selectedFile.docfile
    const docfile = this.selectedFile;
    const obj = {docfile:docfile}
    console.log(obj);
    
    this.user.downloadfile().subscribe((data:any)=>
    {

      console.log(data,'data');
      this.selectedFile = data
      console.log(this.selectedFile);
      
      var blob = new Blob([data],{type:'application/pdf'});

      const x = window.URL.createObjectURL(blob)
      var link = document.createElement('a');

      link.href = x;
      link.download = 'app.pdf'
      document.body.appendChild(link);
      link.click();

    })


      
      
      






















  }
}




































