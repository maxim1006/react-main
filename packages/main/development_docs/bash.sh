#! /bin/bash
#указываю где баш находится (обычно #!/bin/sh)

#echo
#echo Hello World!


#Variables (Uppercase by convention)
#NAME="Max"
#echo "My name is $NAME"
#тоже
#echo "My name is ${NAME}"


# user input
#read -p "Enter your name: " NAME
#echo "Your name is: ${NAME}"


#if statement
#NAME="Max"
#if [ "$NAME" == "Max" ]
#then
#    echo "Your name is Max"
#fi

#read -p "Enter your name: " NAME
#if [ "$NAME" == "Max" ];
#    then
#        echo "Your name is Max"
#    elif [ "$NAME" == "Max1" ];
#    then
#        echo "Your name is Max1"
#    else
#        echo "Wow $NAME"
#fi


# Comparison
########
# val1 -eq val2 Returns true if the values are equal
# val1 -ne val2 Returns true if the values are not equal
# val1 -gt val2 Returns true if val1 is greater than val2
# val1 -ge val2 Returns true if val1 is greater than or equal to val2
# val1 -lt val2 Returns true if val1 is less than val2
# val1 -le val2 Returns true if val1 is less than or equal to val2
########

#NUM1=2
#NUM2=3
#
#if [ $NUM1 -gt $NUM2 ]
#then
#    echo "$NUM1 is greater then $NUM2"
#else
#    echo "$NUM2 is greater then $NUM1"
#fi


# FILE CONDITIONS
########
# -d file   True if the file is a directory
# -e file   True if the file exists (note that this is not particularly portable, thus -f is generally used)
# -f file   True if the provided string is a file
# -g file   True if the group id is set on a file
# -r file   True if the file is readable
# -s file   True if the file has a non-zero size
# -u    True if the user id is set on a file
# -w    True if the file is writable
# -x    True if the file is an executable
########

#FILE="test.txt"
#if [ -e "$FILE" ]
#then
#    echo "$FILE exists"
#else
#    echo "$FILE does NOT exist"
#fi


# CASE SWITCH
#read -p "Are u 21 or over? Y/N " ANSWER
#case "$ANSWER" in
#    [yY] | [yY][eE][sS]) #y or yes
#        echo "You are in"
#        ;;
#    [nN] | [nN][oO])
#    echo "You are out"
#        ;;
#    *)
#    echo "WATT?"
#    ;;
#esac


# FOR LOOP
#NAMES="Max Aliya Lili"
#for NAME in $NAMES
#    do
#        echo "Hello $NAME"
#done

#FILES=$(ls *.txt)
#for FILE in $FILES
#    do
#        echo "$FILE"
#done

#FILES=$(ls *.txt)
#NEW="new"
#for FILE in $FILES
#    do
#        echo "Rename test to new-$FILE"
#        if [ "$FILE" == *"test.txt"* ]; then
#            mv $FILE $NEW-$FILE
#        fi
#done

#FILE=$(ls *"test.txt"*)
#NEW="test.txt"
#mv $FILE $NEW


# WHILE read file line by line
#LINE=1
#
#while read -r CURRENT_LINE
#do
#    echo "$LINE: $CURRENT_LINE"
#    ((LINE++))
#done < "test.txt"


# function
#function sayHello() {
#    echo "Hello world"
#}
#
#sayHello

#function greet() {
#    echo "Hello $1 and I am $2"
#}
#
#greet "Max" "33"


# create folder and file
mkdir test
touch "test/test.txt"
echo "Hello world" >> "test/test.txt"
echo "Created test/test.txt"
