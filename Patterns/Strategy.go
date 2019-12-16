type Operator interface {
	Apply(int, int) int
}

type Operation struct {
	Operator Operator
}

func (o *Operation) Operate(leftValue, rightValue int) int {
	return o.Operator.Apply(leftValue, rightValue)
}

//using structures created apply in addition

type Addition struct{}

func (Addition) Apply(lval, rval int) int {
	return lval + rval
}

add := Operation{Addition{}}
add.Operate(3, 5) // 8

//using apply in multuplication

type Multiplication struct{}

func (Multiplication) Apply(lval, rval int) int {
	return lval * rval
}

mult := Operation{Multiplication{}}

mult.Operate(3, 5) // 15