// el "export" solo funciona si el <script> tiene el type="module"
export const sumar = (n1, n2) => {
    
    n1 = parseInt(n1);
    n2 = parseInt(n2);

    if(n1 == 9) {n1 = 11}
    return n1 + n2;
}

export const restar = (n1, n2) => {
    
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    return n1 - n2;
}