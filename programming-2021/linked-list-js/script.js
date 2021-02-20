class Node{
    constructor(data, next){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(head, tail){
        this.head = head
        this.tail = tail
        this.isCircle = false
    }

    display = () => {
        if(this.isCircle){
            console.log('this is your circular linked list: ')
            console.log(this.head)
            let pointer = this.head.next
            while(pointer != this.head){
                console.log(pointer)
                pointer = pointer.next;
            }
        }
        else {
            console.log('this is your singly linked list: ')
            let pointer = this.head
            while(pointer != null ){
            console.log(pointer)
            pointer = pointer.next;
        } 
        }
    }

    count = () => {
       let counter = 2;
       let pointer = this.head.next;

       if(this.isCircle){
           while(pointer.next != this.head){
               counter+=1;
               pointer = pointer.next
           }
       }
       else{
           while(pointer.next != null){
               counter+=1
               pointer = pointer.next
           }
       }

       console.log(counter)
    }

    prepend = (data) => {
        if(this.isCircle){
            let newhead = new Node(data, this.head)
            let pointer = this.tail
            pointer.next = newhead
            this.head = newhead
        }
        else{
            let newhead = new Node(data, this.head)
            this.head = newhead
        }
        
    }

    append = (data) => {
        if(this.isCircle == false){
            let newnode = new Node(data, this.tail)
            let pointer = this.head

            while(pointer.next.next != null){
                pointer = pointer.next
            }
            pointer.next = newnode;
        }
        else {
            let newNode = new Node(data, this.head)
            let pointer = this.head
            while(pointer.next.next != this.head){
                pointer = pointer.next
            }
            pointer.next.next = newNode
        }
        this.definetail()
    }

    delete = (data) => {
        let pointer = this.head

        if(this.head.data == data){
            this.head = this.head.next
        } else {
            while(pointer.next.data != data){
                pointer = pointer.next
            }
            pointer.next = pointer.next.next;
        }
    }

    insert_at_index = (data, index) => {
        let pointer = this.head;
        let counter = 1;

        while(index != counter){
            pointer = pointer.next
            counter += 1;
        }

        let new_node = new Node(data, pointer.next)
        pointer.next = new_node;
    }

    make_circle = () => {
        let pointer = this.head

        while(pointer.next.next != null){
            pointer = pointer.next;
        }

        pointer.next = this.head;
        this.isCircle = true;
        this.definetail()
    }

    displayhead = () => {
        console.log(this.head)
    }

    displaytail = () => {
        console.log(this.tail)
    }

    definetail = () => {
        if(this.isCircle){
            let pointer = this.head
            while(pointer.next != this.head){
                pointer = pointer.next
            }
            this.tail = pointer
        }
    }

    reverse = () => {

        if(this.isCircle == false){
            let queue = []
            let pointer = this.head 

            while(pointer.next.next != null){
                queue.unshift(pointer)
                pointer = pointer.next
            }
            this.head = pointer

            while(queue.length > 0){
                let list_item = queue[0]
                pointer.next = list_item
                queue.shift()
                list_item.next = queue[0]
                pointer = pointer.next
            }

            linkedlist.display()
            
        }

        else if(this.isCircle){
            let queue = []
            let pointer = this.head 

            while(pointer.next != this.head){
                queue.unshift(pointer)
                pointer = pointer.next
            }

            this.head = pointer

            while(queue.length > 0){
                let list_item = queue[0]
                pointer.next = list_item
                queue.shift()
                if(queue.length > 0){
                    list_item.next = queue[0]
                }
                else{
                    list_item.next = this.head
                }
                
                pointer = pointer.next
            }

            linkedlist.display()
        }
    }
}


let tailn = new Node(null, null)

let headn = new Node(5, tailn)

let linkedlist = new LinkedList(headn, tailn)
