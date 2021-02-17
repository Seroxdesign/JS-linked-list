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
    }

    display = () => {
        let pointer = this.head
        while(pointer != null){
            console.log(pointer)
            pointer = pointer.next;
        } 
    }

    count = () => {
       let counter = 0;
       let pointer = this.head;

       while(pointer != null){
            pointer = pointer.next;
            counter += 1;
       }
       console.log('This linked list contains', counter + ' nodes.')
    }

    prepend = (data) => {
        let newhead = new Node(data, this.head)
        this.head = newhead
    }

    append = (data) => {
        let newnode = new Node(data, this.tail)
        let pointer = this.head

        while(pointer.next.next != null){
            pointer = pointer.next
        }
        pointer.next = newnode;
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
}


let tailn = new Node(null, null)

let headn = new Node(5, tailn)

let linkedlist = new LinkedList(headn, tailn)

linkedlist.prepend(7)
linkedlist.prepend(19)
linkedlist.append(22)
linkedlist.append(54)
linkedlist.prepend(11)
linkedlist.display()
linkedlist.count()
linkedlist.delete(54)
linkedlist.display()
linkedlist.count()
linkedlist.insert_at_index(2, 3)
linkedlist.display()
linkedlist.count()